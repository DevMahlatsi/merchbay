
interface ProductPageProps {
  params: {id: string;};
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  return (
    <div>
      <h1>
        It is working
      </h1>
    </div>
  );
}
