import codecs

def k1(k, m):
    return k % m

def k2(k, m):
    return 1 + (k % (m - 2))

with codecs.open('nazwiska.txt', 'r', encoding='utf-8') as file:
    data = file.readlines()

    lines = [line.strip() for line in data]
    elo = [line.split() for line in lines]

    def wstawOL(tablica, nazwisko):
        i = 0

        while i < len(tablica):
            if tablica[(k1(int(nazwisko[0]), len(tablica)) + i) % len(tablica)] != "BLANK":
                i += 1
            else:
                tablica[(k1(int(nazwisko[0]), len(tablica)) + i) % len(tablica)] = [[nazwisko[1]], i]
                return tablica

    def wstawOK(tablica, nazwisko):
        i = 0

        while i < len(tablica):
            if tablica[(k1(int(nazwisko[0]), len(tablica)) + (i * i)) % len(tablica)] != "BLANK":
                i += 1
            else:
                tablica[(k1(int(nazwisko[0]), len(tablica)) + (i * i)) % len(tablica)] = [[nazwisko[1]], i]
                return tablica

    def wstawOD(tablica, nazwisko):
        i = 0

        while i < len(tablica):
            if tablica[(k1(int(nazwisko[0]), len(tablica)) + (i * k2(int(nazwisko[0]), len(tablica)))) % len(tablica)] != "BLANK":
                i += 1
            else:
                tablica[(k1(int(nazwisko[0]), len(tablica)) + (i * k2(int(nazwisko[0]), len(tablica)))) % len(tablica)] = [[nazwisko[1]], i]
                return tablica

    wielkosctablic = 20000
    wynikOL = ["BLANK"] * wielkosctablic
    wynikOK = ["BLANK"] * wielkosctablic
    wynikOD = ["BLANK"] * wielkosctablic

    for x in range(len(elo)):
        if  x<len(elo)*0.5> 0:
            wstawOL(wynikOL,elo[x])

    for x in range(len(elo)):
        if  x<len(elo)*0.5> 0:
            wstawOK(wynikOK,elo[x])

    for x in range(len(elo)):
        if  x<len(elo)*0.5> 0:
            wstawOD(wynikOD,elo[x])

    print("srednia 50%")
    mianownik = len(wynikOL) * 0.5

    print("W + OL")
    print(sum([curr[1] / mianownik for curr in wynikOL if curr != "BLANK"]))
    print("W + OK")
    print(sum([curr[1] / mianownik for curr in wynikOK if curr != "BLANK"]))

    print("W + OD")
    print(sum([curr[1] / mianownik for curr in wynikOD if curr != "BLANK"]))

    print("")
    wynik2OL = ["BLANK"] * wielkosctablic
    wynik2OK = ["BLANK"] * wielkosctablic
    wynik2OD = ["BLANK"] * wielkosctablic

    for x in range(len(elo)):
        if  x<len(elo)*0.7> 0:
            wstawOL(wynik2OL,elo[x])

    for x in range(len(elo)):
        if  x<len(elo)*0.7> 0:
            wstawOK(wynik2OK,elo[x])

    for x in range(len(elo)):
        if  x<len(elo)*0.7> 0:
            wstawOD(wynik2OD,elo[x])

    print("srednia 70%")
    mianownik2 = len(wynik2OL) * 0.7

    print("W + OL")
    print(sum([curr[1] / mianownik2 for curr in wynik2OL if curr != "BLANK"]))

    print("W + OK")
    print(sum([curr[1] / mianownik2 for curr in wynik2OK if curr != "BLANK"]))

    print("W + OD")
    print(sum([curr[1] / mianownik2 for curr in wynik2OD if curr != "BLANK"]))

    print("")
    wynik3OL = ["BLANK"] * wielkosctablic
    wynik3OK = ["BLANK"] * wielkosctablic
    wynik3OD = ["BLANK"] * wielkosctablic

    for x in range(len(elo)):
        if  x<len(elo)*0.9> 0:
            wstawOL(wynik3OL,elo[x])

    for x in range(len(elo)):
        if  x<len(elo)*0.9> 0:
            wstawOK(wynik3OK,elo[x])

    for x in range(len(elo)):
        if  x<len(elo)*0.9> 0:
            wstawOD(wynik3OD,elo[x])

    print("srednia 90%")
    mianownik3 = len(wynik3OL) * 0.9

    print("W + OL")
    print(sum([curr[1] / mianownik3 for curr in wynik3OL if curr != "BLANK"]))

    print("W + OK")
    print(sum([curr[1] / mianownik3 for curr in wynik3OK if curr != "BLANK"]))

    print("W + OD")
    print(sum([curr[1] / mianownik3 for curr in wynik3OD if curr != "BLANK"]))