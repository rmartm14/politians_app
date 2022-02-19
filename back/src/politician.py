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
    
    @classmethod
    def from_request(self, request_data):
        return Politician(request_data['titular'], request_data['partido'], request_data['partido_filtro'],
        request_data['genero'], request_data['cargo_filtro'], request_data['cargo'], request_data['institucion'],
        request_data['ccaa'], request_data['sueldobase_sueldo'], request_data['complementos_sueldo'], request_data['paga_sueldo'],
        request_data['dieta_sueldo'], request_data['trienios_sueldo'], request_data['retribucion_mensual'], request_data['retribucion_anual'],
        request_data['observaciones'])