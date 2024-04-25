import { yupResolver } from "@hookform/resolvers/yup";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ReactSelect from "react-select";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { ButtonDefault, ErrorMessage } from "../../../components";
import paths from "../../../constants/paths";
import api from "../../../services/api";
import { Container, Input, Label, LabelUpload } from "./styles";

export default function NewProduct() {
  const [fielName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { push } = useHistory();

  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Selecione uma categoria"),
    file: Yup.mixed()
      .test("required", "Carregue um arquivo", (value) => {
        return value?.length > 0;
      })
      .test("fileSize", "Carregue arquivos de até 2mb", (value) => {
        return value[0]?.size <= 20000;
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append("name", data.name);
    productDataFormData.append("price", data.price);
    productDataFormData.append("category_id", data.category.id);
    productDataFormData.append("file", data.file[0]);

    await toast.promise(api.post("products", productDataFormData), {
      pending: "Criando novo produto",
      success: "Produto criado com sucesso",
      error: "Falha ao criar o produto",
    });

    setTimeout(() => {
      push(paths.Products);
    }, 2000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <h1>Criar Produto</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type="number" {...register("price")} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <LabelUpload>
          {fielName || (
            <>
              <DriveFolderUploadIcon /> Carregue a imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name);
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>

        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={categories}
              getOptionLabel={(cat) => cat.name}
              getOptionValue={(cat) => cat.id}
              placeholder="Categorias"
            />
          )}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <ButtonDefault>Adicionar Produto</ButtonDefault>
      </form>
    </Container>
  );
}
