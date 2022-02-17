class Politician():
    def __init__(self, titular, partido, partido_filtro, genero, cargo_filtro,
     cargo, institucion, ccaa, sueldobase_sueldo, complementos_sueldo, paga_sueldo,
      dieta_sueldo, trienios_sueldo, retribucion_mensual, retribucion_anual, observaciones):
      
      self.titular = titular
      self.partido = partido
      self.partido_filtro = partido_filtro
      self.genero = genero
      self.cargo_filtro = cargo_filtro
      self.cargo = cargo
      self.institucion = institucion
      self.ccaa = ccaa
      self.sueldobase_sueldo = sueldobase_sueldo
      self.complementos_sueldo = complementos_sueldo
      self.paga_sueldo = paga_sueldo
      self.dieta_sueldo = dieta_sueldo
      self.trienios_sueldo = trienios_sueldo
      self.retribucion_mensual = retribucion_mensual
      self.retribucion_anual = retribucion_anual
      self.observaciones = observaciones
    
    def __init__(self, request_data):
        self.titular = request_data['titular']
        self.partido = request_data['partido']
        self.partido_filtro = request_data['partido_filtro']
        self.genero = request_data['genero']
        self.cargo_filtro = request_data['cargo_filtro']
        self.cargo = request_data['cargo']
        self.institucion = request_data['institucion']
        self.ccaa = request_data['ccaa']
        self.sueldobase_sueldo = request_data['sueldobase_sueldo']
        self.complementos_sueldo = request_data['complementos_sueldo']
        self.paga_sueldo = request_data['paga_sueldo']
        self.dieta_sueldo = request_data['dieta_sueldo']
        self.trienios_sueldo = request_data['trienios_sueldo']
        self.retribucion_mensual = request_data['retribucion_mensual']
        self.retribucion_anual = request_data['retribucion_anual']
        self.observaciones = request_data['observaciones']