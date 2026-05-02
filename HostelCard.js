export default function HostelCard({ hostel }) {

  return (

    <div style={{

      border: "1px solid #ccc",

      padding: 10

    }}>

      <h3>{hostel.name}</h3>

      <p>{hostel.location}</p>

      <p><b>TZS {hostel.price}</b></p>

    </div>

  )

}
