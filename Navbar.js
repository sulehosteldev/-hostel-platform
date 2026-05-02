export default function Navbar() {

  return (

    <div style={{

      display: "flex",

      justifyContent: "space-between",

      padding: 15,

      background: "#f5f5f5"

    }}>

      <h3>HostelFinder</h3>

      <div>

        <a href="/">Home</a> | <a href="/hostels">Hostels</a>

      </div>

    </div>

  )

}
