import alfy from "alfy";

if (alfy.input) {
  const res = await alfy.fetch("https://www.npmjs.com/search", {
    searchParams: {
      q: alfy.input,
    },
    headers: {
      "x-spiferack": "1",
    },
  });

  const items = res.objects.map((result) => {
    const pkg = result.package;

    return {
      title: pkg.name,
      subtitle: pkg.description,
      arg: pkg.links.repository || pkg.links.npm,
      mods: {
        alt: {
          arg: pkg.links.npm,
          subtitle: "Open the npm page instead of the GitHub repo",
        },
        ctrl: {
          arg: pkg.name,
          subtitle: "Copy package name",
        },
      },
    };
  });
  alfy.output(items);
}
