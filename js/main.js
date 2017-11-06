function openNav() {
  document.getElementById("open").style.transition="0";
  document.getElementById("open").classList.add("hidden");
  document.getElementById('close').classList.remove("hidden");
  document.getElementById("myNav").style.height = "100%";


}

function closeNav() {
  document.getElementById("close").style.transition="0";
  document.getElementById('close').classList.add("hidden");
  document.getElementById("open").classList.remove("hidden");
  document.getElementById("myNav").style.height = "0%";

}
