import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { VotesScreen } from "../screens/VotesScreen"
import { WinnerScreen } from "../screens/WinnerScreen"

const { Screen, Navigator } = createBottomTabNavigator()

export function StackRoutes() {
    return (
        // Area de navegação da aplicação
        <Navigator>
            <Screen
                name='Votes'
                component={VotesScreen}
            />

            <Screen
                name='Winner'
                component={WinnerScreen}
            />
        </Navigator>
    )
}