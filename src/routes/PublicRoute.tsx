import { useAuth } from "../hooks/useAuth"

const PublicRoute = () => {
    const { user } = useAuth();
    console.log(user);
  return (
    <div>PublicRoute</div>
  )
}

export default PublicRoute