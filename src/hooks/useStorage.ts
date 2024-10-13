import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { getItem, setItem } from '../services/asyncStorage'
import { ASYNC_KEYS, QR_TYPE } from '../assets/constants'

export type EntryData = {
    type: QR_TYPE;
    data: string;
}

const useStorage = () => {
    const [isLoading, setisLoading] = useState(false)

    const getHistory = async (key: ASYNC_KEYS) => {
        return new Promise(async (resolve, reject) => {
            try {
                setisLoading(true)
                const data = await getItem(key, [])
                setisLoading(false)
                resolve(data)
            } catch (error) {
                console.log("getHistory ==>>", error);
                resolve([])
            } finally {
                setisLoading(false)
            }
        })
    }


    const saveEntryInStorage = async (key: ASYNC_KEYS, data: EntryData) => {
        return new Promise(async (resolve, reject) => {
            try {
                const unixTimestamp = Math.floor(Date.now() / 1000);
                const prevEntries = await getItem(key, [])
                const fData = {
                    ...data,
                    createdAt: unixTimestamp,
                    updatedAt: unixTimestamp
                }
                let mData = [
                    ...prevEntries,
                    fData
                ]
                await setItem(key, mData)

                resolve(fData)
            } catch (error) {
                reject(false)
            }
        })
    }

    const deleteEntryFromStorage = async (key: ASYNC_KEYS, id: number | string) => {
        return new Promise(async (resolve, reject) => {
            try {
                const prevEntries = await getItem(key, [])
                let mData = prevEntries.filter((x:any) => x.createdAt != id)
                await setItem(key, mData)
                resolve(mData)
            } catch (error) {
                reject(false)
            }
        })
    }



    return {
        isLoading,
        setisLoading,
        getHistory,
        saveEntryInStorage,
        deleteEntryFromStorage
    }
}

export default useStorage

