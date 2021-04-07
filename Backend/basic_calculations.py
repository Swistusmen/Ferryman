from CalculationData import CalculationData

def check_if_solution_is_balanced(data:CalculationData):
    whole_demand=0
    for i in data.popyt:
        whole_demand+=i
    whole_supply=0
    for i in data.podaz:
        whole_demand+=i
    return whole_demand-whole_supply

def calculate_profits_on_road(data:CalculationData):
    profits=[]
    for i in data.koszt:
        for j in data.cena:
            profits.append(j-i)
    for i in range(0,4):
        profits[i]-=data.transport_d1[i]
    for i in range(4,8):
        profits[i]-=data.transport_d2[i-4]
    return profits

def comparator(e):
    return e[1]

def plan_road_for_first_ride_balanced(data:CalculationData,profits: list):
    merch_on_road=[0] *8
    order=[]
    for i in range(0,7):
        order.append([i,profits[i]])
    order.sort(key=comparator, reverse=True)
    demand_copy=data.popyt.copy()
    supply_copy=data.podaz.copy()
    print(order)
    for j in range(0,7):
        i=order[j][0]
        print(i)
        if((supply_copy[int(i/4)]>0)and(demand_copy[i%4]>0)):
            if(supply_copy[int(i/4)]>=demand_copy[i%4]):
                merch_on_road[i]=demand_copy[i%4]
                supply_copy[int(i/4)]-=demand_copy[i%4]
                demand_copy[i%4]=0
            else:
                merch_on_road[i]=supply_copy[int(i/4)]
                demand_copy[i%4]-=supply_copy[int(i/4)]
                supply_copy[int(i/4)]=0
    print(merch_on_road)

        




my_list=[60,40,10,40,20,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
data=CalculationData(my_list)

gains=[4,1,6,7,2,4,10,3]
plan_road_for_first_ride_balanced(data,gains)
