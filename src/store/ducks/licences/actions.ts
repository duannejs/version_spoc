import { ILicence, Types } from './types'
import { action } from 'typesafe-actions'

export const GetLicences = () => {
    return action(Types.LICENCE, {})
}

export const GetLicencesFailure = (err: number) => {
    return action(Types.LICENCE_FAILURE, { err })
}

export const GetLicencesSuccess = (licences: ILicence[]) => {
    return action(Types.LICENCE_SUCCESS, { licences })
}


export const CancelLicence = (company_id: number, store_id: number) => {
    return action(Types.CANCEL_LICENCE, { company_id, store_id })
}