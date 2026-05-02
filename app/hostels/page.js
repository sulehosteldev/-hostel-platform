import { hostels } from "@/lib/data"

export default function Hostels() {

  return (

    <div style={{ padding: 20 }}>

      <h1>All Hostels</h1>

      {hostels.map(h => (

        <div key={h.id} style={{

          border: "1px solid #ddd",

          padding: 10,

          margin: 10

        }}>

          <h3>{h.name}</h3>

          <p>{h.location}</p>

          <p>TZS {h.price}</p>

        </div>

      ))}

    </div>

  )

}
