function showDisplay(value) {
    const display = document.getElementById('calculator-display');
    if (!display) {
        alert('データ取得に失敗しました。');
        return;
    }
    display.value += value;
}