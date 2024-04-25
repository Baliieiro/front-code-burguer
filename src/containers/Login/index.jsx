import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import BgBurguer from "../../assets/background-burguer.svg";
import Logo from "../../assets/logo-image.svg";
import { ButtonDefault, ErrorMessage } from "../../components";
import useUser from "../../hooks/useUser";
import api from "../../services/api";
import {
  Container,
  ImageContainer,
  ContainerItems,
  Label,
  Input,
  P,
} from "./styles";

export function Login() {
  const history = useHistory();
  const { putUserData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("sessions", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Seja bem-vindo(a)",
        error: "Verifique seu e-mail e senha",
      },
    );

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        history.push("/pedidos");
      } else {
        history.push("/");
      }
    }, 2000);
  };

  return (
    <Container>
      <ImageContainer src={BgBurguer} alt="Login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burguer" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            $error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            $error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <ButtonDefault type="submit">Entrar</ButtonDefault>
        </form>

        <P>
          Não possui conta?<Link to={"/cadastro"}>Cadastre-se</Link>
        </P>
      </ContainerItems>
    </Container>
  );
}
