import { useLocation } from "react-router-dom";

export function loader() {
  return null;
}

export default function FoodStorage() {
  const { state } = useLocation();
  console.log(state);
  const [personState, setPerson] = useState(state);
  return <div></div>;
}
