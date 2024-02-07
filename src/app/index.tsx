import { CategoryButton } from '@/components/category-button'
import Header from '@/components/header'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title='Make your wish' cartQuantityItems={2}/>

      <View className='flex-row gap-4'>
        <CategoryButton title='Snack of the day' />
      </View>
    </View>
  )
}