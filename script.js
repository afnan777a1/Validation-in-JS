const setScreenValue = async (value) => {
  document.getElementById("result").value =
    document.getElementById("result").value + value;
};

const clearScreen = async () => {
  document.getElementById("result").value = "";
};
