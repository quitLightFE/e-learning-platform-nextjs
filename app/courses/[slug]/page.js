import { getCourse } from "@/api";
import { Typography } from "@mui/material";
export default async function python({ params }) {
  const { slug } = await params;

  const data = await getCourse(slug);
  console.log(data);

  return (
    <>
      <Typography variant="h6">Course: {data.title}</Typography>
      <img
        src={data.img}
        alt={data.title}
        style={{ width: "100%", borderRadius: "14px", margin: "20px 0" }}
      />
    </>
  );
}
