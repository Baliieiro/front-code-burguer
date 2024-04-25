import { yupResolver } from "@hookform/resolvers/yup";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ReactSelect from "react-select";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { ButtonDefault, ErrorMessage } from "../../../components/index.js";
import paths from "../../../constants/paths.js";
import api from "../../../services/api";
import { Container, Input, Label, LabelUpload, ContainerInput } from "./styles";

export default function EditProduct() {
  const {
    push,
    location: {
      state: { product },
    },
  } = useHistory();
  const [categories, setCategories] = useState([]);
  const [fielName, setFileName] = useState(null);
  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Selecione uma categoria"),
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
    productDataFormData.append("offer", data.offer);

    await toast.promise(
      api.post(`products/${product.id}`, productDataFormData),
      {
        pending: "Editando novo produto",
        success: "Produto editado com sucesso",
        error: "Falha ao editar o produto",
      },
    );
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
      <h1>Editar Produto</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input {...register("name")} defaultValue={product.name} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input
          type="number"
          {...register("price")}
          defaultValue={product.price}
        />
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
          defaultValue={product.category}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={categories}
              getOptionLabel={(cat) => cat.name}
              getOptionValue={(cat) => cat.id}
              placeholder="Categorias"
              defaultValue={product.category}
            />
          )}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <ContainerInput>
          <input
            type="checkbox"
            {...register("offer")}
            defaultChecked={product.offer}
          />
          <Label>Produto está em oferta?</Label>
        </ContainerInput>

        <ButtonDefault>Editar Produto</ButtonDefault>
      </form>
    </Container>
  );
}
