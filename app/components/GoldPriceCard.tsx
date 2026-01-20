// app/components/GoldPriceCard.tsx
type GoldPriceProps = {
  data: {
    hargaBeli: string;
    hargaJual: string;
    tglBerlaku: string;
    isHargaBeliUp: boolean;
    isHargaJualUp: boolean;
  };
};

export default function GoldPriceCard({ data }: GoldPriceProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-md">
      <p className="text-sm text-gray-500 mb-2">
        Berlaku tanggal: <strong>{data.tglBerlaku}</strong>
      </p>

      <div className="space-y-4">
        {/* Harga Beli */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Harga Beli</span>
          <span
            className={`font-bold ${
              data.isHargaBeliUp ? "text-green-600" : "text-red-600"
            }`}
          >
            Rp {Number(data.hargaBeli).toLocaleString("id-ID")}
            {data.isHargaBeliUp ? " ▲" : " ▼"}
          </span>
        </div>

        {/* Harga Jual */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Harga Jual</span>
          <span
            className={`font-bold ${
              data.isHargaJualUp ? "text-green-600" : "text-red-600"
            }`}
          >
            Rp {Number(data.hargaJual).toLocaleString("id-ID")}
            {data.isHargaJualUp ? " ▲" : " ▼"}
          </span>
        </div>
      </div>
    </div>
  );
}
