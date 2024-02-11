import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import Logo from "../../assets/logo-image.svg";
import BgRegister from "../../assets/register-image.svg";
import { ButtonDefault } from "../../components";
import api from "../../services/api";
import {
  Container,
  ImageContainer,
  ContainerItems,
  Label,
  Input,
  P,
  ErrorMessage,
} from "./styles";

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 dígitos"),
    confirmPassword: Yup.string()
      .required("A senha é obrigatória")
      .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true },
      );

      if (status === 200 || status === 201) {
        toast.success("Cadastro criado com sucesso!");
      } else if (status === 409) {
        toast.error("E-mail ja cadastrado!");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Falha no sistema! Tente novamente");
    }
  };

  return (
    <Container>
      <ImageContainer src={BgRegister} alt="Register-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burguer" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            $error={errors.name?.message}
          />
          <ErrorMessage $error={errors.name?.message}>
            {errors.name?.message}
          </ErrorMessage>

          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            $error={errors.email?.message}
          />
          <ErrorMessage $error={errors.email?.message}>
            {errors.email?.message}
          </ErrorMessage>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            $error={errors.password?.message}
          />
          <ErrorMessage $error={errors.password?.message}>
            {errors.password?.message}
          </ErrorMessage>
          <Label>Confirmar senha</Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            $error={errors.confirmPassword?.message}
          />
          <ErrorMessage $error={errors.confirmPassword?.message}>
            {errors.confirmPassword?.message}
          </ErrorMessage>

          <ButtonDefault type="submit">Cadastrar</ButtonDefault>
        </form>

        <P>
          Já possui conta?<Link to={"/login"}>Entre!</Link>
        </P>
      </ContainerItems>
    </Container>
  );
}
