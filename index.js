const ROW_COUNTER_KEY = "current_row_count";

const decreaseCount = () => {
  const currentRowCount = getCount();
  if (currentRowCount <= 0) {
    console.log(
      `Current row count is ${currentRowCount}, cannot decrease further`
    );
    return;
  }
  const decreasedRowCount = currentRowCount - 1;
  setCount(decreasedRowCount);
};

const increaseCount = () => {
  const currentRowCount = getCount();
  const increasedRowCount = currentRowCount + 1;
  setCount(increasedRowCount);
};

const getCount = () => {
  try {
    return Number(window.localStorage.getItem(ROW_COUNTER_KEY));
  } catch {
    setCount(0);
    return 0;
  }
};

const setCount = (count = 0) => {
  window.localStorage.setItem(ROW_COUNTER_KEY, count);
  document.getElementById("current-row").innerHTML = count;
};

const resetCount = () => {
  setCount(0);
};

window.onload = () => {
  const count = getCount();
  setCount(count);
};

window.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "Space") increaseCount();
  if (event.code === "Escape") decreaseCount();
});
