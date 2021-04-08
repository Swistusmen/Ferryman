
class CalculationData():
    def __init__(self, dataFromFront):
        self.podaz=[dataFromFront[0],dataFromFront[1]] 
        self.popyt=[]
        for i in range(2,6):
            self.popyt.append(dataFromFront[i])
        self.cena=[dataFromFront[6],dataFromFront[7]] #cena sprzedazy towaru do odbiorcy
        self.koszt=[] #koszt zakupu towaru przez posrednika
        for i in range(8,12):
            self.koszt.append(dataFromFront[i])
        self.transport_d1=[]
        for i in range(12,16):
            self.transport_d1.append(dataFromFront[i])
        self.transport_d2=[]
        for i in range(16,20):
            self.transport_d2.append(dataFromFront[i])
        self.zyski=[]
        self.koszt_calkowity=0
        self.przychod_calkowity=0
        self.zysk_calkowity=0
    
    def printt(self):
        print(self.podaz)
        print(self.popyt)
        print(self.cena)
        print(self.koszt)
        print(self.transport_d1)
        print(self.transport_d2)

    def money(self):
        out=[]
        out.append(self.koszt_calkowity)
        out.append(self.przychod_calkowity)
        out.append(self.zysk_calkowity)
        return out

