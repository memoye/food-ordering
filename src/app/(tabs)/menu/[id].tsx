import products from "assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products[Number(id) - 1];

  return (
    <View>
      <Stack.Screen
        options={{
          title:
            // "Details"
            product.name,
        }}
      />
      <Text>Product Details Screen for {product.name}</Text>
    </View>
  );
};
export default ProductDetailsScreen;
