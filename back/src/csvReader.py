import csv
from politician import Politician

def read_csv() -> list:
    """
    Function which reads a csv file located in etc folder

    Character encoding: UTF-8

    Args:
        None
    Returns:
        list(list): list of dictionaries read in the csv
    """
    with open('etc/pol.csv', mode='r', encoding="UTF-8") as file:
        return list(csv.DictReader(file))

def convert_csv_to_politians(csv_list:list) -> list:
    """
    Function which converts a given csv row list into a list of politicians.

    It may be a good idea to check if the csv_list is not empty (TODO)

    Args:
        csv_list(list): list of rows read in the csv
    
    Returns:
        politician_list(list): list of politians
    """
    politician_list = list()
    for row in csv_list:
        politician_list.append(
            Politician(
                titular=row['TITULAR'],
                partido=row['PARTIDO'],
                partido_filtro=row['PARTIDO_PARA_FILTRO'],
                genero=row['GENERO'],
                cargo_filtro=row['CARGO_PARA_FILTRO'],
                cargo=row['CARGO'],
                institucion=row['INSTITUCION'],
                ccaa=row['CCAA'],
                sueldobase_sueldo=row['SUELDOBASE_SUELDO'],
                complementos_sueldo=row['COMPLEMENTOS_SUELDO'],
                paga_sueldo=row['PAGASEXTRA_SUELDO'],
                dieta_sueldo=row['OTRASDIETASEINDEMNIZACIONES_SUELDO'],
                trienios_sueldo=row['TRIENIOS_SUELDO'],
                retribucion_mensual=row['RETRIBUCIONMENSUAL'],
                retribucion_anual=row['RETRIBUCIONANUAL'],
                observaciones=row['OBSERVACIONES']
                ))
    return politician_list



