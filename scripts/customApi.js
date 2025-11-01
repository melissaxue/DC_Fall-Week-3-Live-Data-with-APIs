function apiApp() {
  return {
    title: "Studio Ghibli",
    tagline: "",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading your data...</p>";
      try {
        // STEP 1: Pick API from README
        // STEP 2: Add endpoint below
        const Url = "https://ghibliapi.vercel.app/films/"
        const res = await axios.get(Url);
        // STEP 3: 
        console.log(res.data)
        // STEP 4: 
        this.render(res.data)
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Could not load data 😢</p>`;
        console.error(err);
      }
    },
    render(items = []) {
      const out = document.getElementById("output");
      out.innerHTML = items
        .map(item => `<article class='bg-white rounded-xl shadow p-4'>
                        <p class='font-medium'>${item.name || item.title}</p>
                      </article>`)
        .join('');
    },
  };
}