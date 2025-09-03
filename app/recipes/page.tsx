// app/recipes/page.tsx  (Next.js App Router)
// or src/pages/recipes.tsx for CRA/Vite (adjust imports accordingly)

export default function RecipesPage() {
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks"];

  const recipes = [
    { title: "Quinoa Salad with Grilled Chicken", calories: 350, protein: 25 },
    { title: "Salmon with Roasted Vegetables", calories: 400, protein: 30 },
    { title: "Avocado Toast with Poached Egg", calories: 280, protein: 15 },
    { title: "Berry Smoothie Bowl", calories: 200, protein: 10 },
    { title: "Lentil Soup", calories: 300, protein: 20 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tight text-green-600">NutriTrack</span>
          <ul className="flex items-center gap-6 text-gray-600">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="text-green-600 font-semibold cursor-default">Recipes</li>
            <li className="hover:text-green-600 cursor-pointer">Community</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
          </ul>
        </div>
      </nav>

      {/* Header / Hero */}
      <header className="mx-auto max-w-6xl px-6 pt-10 pb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Healthy Recipes</h1>
        <p className="mt-2 text-gray-600">
          Explore a variety of nutritious and delicious recipes tailored to your health goals.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {/* Search + Categories */}
        <section className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <label className="relative block w-full md:w-1/2">
              <span className="sr-only">Search recipes</span>
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                {/* Magnifying glass icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search recipes"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 py-2.5 outline-none ring-0 focus:border-green-300 focus:bg-white"
              />
            </label>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c, i) => (
                <button
                  key={c}
                  className={[
                    "rounded-full px-4 py-2 text-sm transition",
                    i === 0
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Recipes grid */}
        <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <article key={r.title} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden">
              {/* Placeholder thumb (since PDF didn’t specify images) */}
              <div className="h-36 w-full bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100" />
              <div className="p-4">
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {r.calories} calories | {r.protein}g protein
                </p>
                <div className="mt-4">
                  <button className="inline-flex items-center rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
                    View Recipe
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Pagination */}
        <nav className="mt-8 flex items-center justify-center gap-2">
          {["1", "2", "3", "4", "5"].map((n, i) => (
            <button
              key={n}
              className={[
                "h-9 w-9 rounded-lg text-sm font-medium",
                i === 0
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50",
              ].join(" ")}
            >
              {n}
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
}
