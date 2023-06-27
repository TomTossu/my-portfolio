export const handleScroll = (e) => {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

  const element = document.getElementById(targetId);

  element?.scrollIntoView({
    behavior: "smooth",
  });
};
