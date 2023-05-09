def k1(k, m):
    return k % m

def k2(k, m):
    return 1 + (k % (m - 2))

with open('nazwiska.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()
    l = [line.strip() for line in lines]
    elo = [x.split(' ') for x in l]
    print(elo)

def wstaw(tablica, nazwisko):
    i = 0
    while i <= len(tablica):
        if tablica[k1(nazwisko[0], len(tablica))] != 'BLANK':
            i += 1
        else:
            tablica[k1(nazwisko[0], len(tablica))] = {nazwisko[1]: i}
            return tablica

wynik = ['BLANK'] * 2000
wstaw(wynik, elo[0])
wynik2 = wstaw(wynik, elo[0])
print(wynik2)
