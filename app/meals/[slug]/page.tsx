import React from "react";

export default ({ params }: Readonly<{ params: { slug: string } }>) => {
  return <h1>Meal: {params.slug}</h1>
}