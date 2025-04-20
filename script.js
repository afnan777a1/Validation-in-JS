const setScreenValue = async (value) => {
  document.getElementById("resul").value = document.getElementById(
    "result"
  ).value = value;
};

const cleanScreen = async () => {
  document.getElementById("result").value = "";
};
