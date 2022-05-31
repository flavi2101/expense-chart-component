const weekDay = document.querySelectorAll("[data-week]");
const balance = document.querySelector("[data-balance]");
const balanceMonth = document.querySelector("[data-balance-month]");
const sizeOfSreen = parseInt(
  window.getComputedStyle(weekDay[0])["block-size"],
  10
);

function reqData() {
  fetch("data.json").then((res) =>
    convertToJson(res).then((data) => dataInformation(data))
  );
}
function convertToJson(response) {
  return response.json();
}

function dataInformation(data) {
  let balanceSum = 0;
  for (let i = 0; i < data.length; i++) {
    let value = `${parseInt((data[i].amount * 650) / sizeOfSreen)}px`;
    weekDay[i].style["block-size"] = value;
    weekDay[i].setAttribute("data-value", `R$ ${data[i].amount}`);
    balanceSum += data[i].amount;
  }

  balance.textContent = `$${balanceSum}`;
  balanceMonth.textContent = `$${balanceSum}`;
}

reqData();
