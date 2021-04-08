from CalculationData import CalculationData
from basic_calculations import *
#file which is real main- here we're going to glue all the functions

def find_solution(data: CalculationData):
    profits=calculate_profits_on_road(data)
    #profits=[7,6,0,2,10,7,8,5]
    balance=check_if_solution_is_balanced(data)
    if (balance==0):
        print("hello")
        merch=plan_road_for_first_ride_balanced(data,profits)
        total_profit=calculate_total_profit(profits,merch)
        duals=dual_variables(profits,merch)
        deltas=calculate_deltas(merch,duals,profits)

        while(earnings_can_be_increased(deltas)):
            merch=improve_road_plan(deltas,profits,data,merch)
            total_profit=calculate_total_profit(profits,merch)
            duals=dual_variables(profits,merch)
            deltas=calculate_deltas(merch,duals,profits)
        for i in range(0,8):
            data.zyski.append(merch[i])
        data.zysk_calkowity=total_profit
        data.koszt_calkowity=0
        data.przychod_calkowity=0
    return data



