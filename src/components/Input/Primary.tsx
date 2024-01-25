import { Input } from "@chakra-ui/react"

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const PrimaryInput = ({ name, value, onChange }: PrimaryInputProps) => {
    return <>  <Input variant='filled' placeholder='Filled' name={name} value={value} onChange={onChange} /></>
}