outer:
    for (let i = 2; i < 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue outer;
            }
        }
        document.write("Делители числа " + i + ': 1 и ' + i + '<br>')
    }