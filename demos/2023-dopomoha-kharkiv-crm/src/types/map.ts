export type OfficialDistrictName =
  | 'Шевченківський район'
  | 'Холодногірський район'
  | 'Новобаварський район'
  | 'Основ’янський район'
  | 'Індустріальний район'
  | 'Слобідський район'
  | 'Салтівський район'
  | 'Немишлянський район'
  | 'Київський район'
  | 'Богодухівський район'
  | 'Харківський район'
  | 'Красноградський район'
  | 'Чугуївський район'
  | 'Лозівський район'
  | 'Куп’янський район'
  | 'Ізюмський район'

export type DistrictName = OfficialDistrictName

export type DistrictProperties = {
  full_id: string
  osm_id: string
  admin_level: string
  region: 'Харкiв' | 'Харківська область'
  name: DistrictName
}
