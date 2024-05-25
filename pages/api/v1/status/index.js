export default function status(request, response) {
  //response é o objeto e 'status' é um metodo dele
  response.status(200).json({ status: "OK no teste da api status ã ã óó" });
  // response.status(200).send("OK no teste da api status ã ã óó");
}
