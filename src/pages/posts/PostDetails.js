import { useParams } from "react-router";

export default function PostDetails() {
  let params = useParams();
  console.log('params', params);

  return <div className="post">ID={params.id}</div>;
}
