import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props{
    isOn:boolean;
    onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
          trackColor={{ false: '#d9d9db', true: "#585606" }}
          thumbColor={ (Platform.OS === 'android') ? '#5856d6': '' }
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    )
}

export default CustomSwitch
