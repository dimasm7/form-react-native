import axios from 'axios'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Input } from '../../components'
import { useForm } from '../../utils'

const Login = () => {
    const [form, setForm] = useForm({
        name: '',
        usia: '',
        kota: ''
    })
    const url = ''

    const onSubmit = () => {
        axios.post(url, form).then((res) => {
            alert(res.data.data)
        }).catch((err) => {
            alert(err.message)
        })
    }

    return (
        <View style={styles.page}>
            <Input label="Nama" value={form.name} onChangeText={(value) => setForm('name', value)} />
            <Input label="Usia" value={form.usia} onChangeText={(value) => setForm('usia', value)} />
            <Input label="Kota" value={form.kota} onChangeText={(value) => setForm('kota', value)} />
            <View style={styles.gap} />
            <Button text="Submit" onPress={onSubmit} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        flex: 1,
        padding: 24
    },
    gap: {
        height: 24
    }
})
