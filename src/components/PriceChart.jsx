import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"
import { formatINR } from "@/lib/utils"

export default function PriceChart({ comparison }) {
  const { gemListing, marketListings, fairPrice } = comparison

  const data = [
    { name: "GeM", price: gemListing.price, fill: "var(--color-gem)" },
    ...marketListings.map((l) => ({
      name: l.platform,
      price: l.price,
      fill: l.platform === "Amazon" ? "var(--color-amazon)" : "var(--color-flipkart)",
    })),
    { name: "Fair Price", price: fairPrice, fill: "var(--color-positive)" },
  ]

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
          <CartesianGrid vertical={false} stroke="var(--color-border)" />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--color-muted)", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--color-muted)", fontSize: 12 }}
            tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
            width={48}
          />
          <Tooltip
            cursor={{ fill: "var(--color-muted-surface)" }}
            formatter={(value) => [formatINR(value), "Price"]}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid var(--color-border)",
              fontSize: 13,
            }}
          />
          <Bar dataKey="price" radius={[6, 6, 0, 0]} maxBarSize={64}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
