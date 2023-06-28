export default function Home() {
  return (
    <main>
      <button className="btn">
        <span className=" loading loading-spinner"></span>
        loading
      </button>
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <h1>Next.js + TypeScript + Daisy UI</h1>
    </main>
  );
}
