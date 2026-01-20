// app/page.tsx
import GoldPriceCard from "./components/GoldPriceCard";

async function getGoldPrice() {
  const res = await fetch(
    "https://sahabat.pegadaian.co.id/gold/prices/savings",
    {
      cache: "no-store", // agar selalu update
    }
  );

  if (!res.ok) {
    throw new Error("Gagal mengambil data harga emas");
  }

  return res.json();
}

export default async function Home() {
  const result = await getGoldPrice();
  const data = result.data;

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">
        Dashboard Harga Emas Pegadaian
      </h1>

      <GoldPriceCard data={data} />
    </main>
  );
}
