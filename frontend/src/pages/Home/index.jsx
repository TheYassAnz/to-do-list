import useAuthUser from "react-auth-kit/hooks/useAuthUser";

export default function Home() {
  const auth = useAuthUser();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">
        Bienvenue <strong>{auth.firstname + " " + auth.lastname} </strong>
      </h1>
    </div>
  );
}
