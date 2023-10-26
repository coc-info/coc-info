export default function Page({ params }: { params: { clanTag: string } }) {
  return (
    <main>
      <h2>current war page</h2>
      <p>{params.clanTag}</p>
    </main>
  );
}
