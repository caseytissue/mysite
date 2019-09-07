import Recipe from "./recipe.jsx"

document.querySelectorAll('#dessert')
  .forEach(domContainer => {
    ReactDOM.render(
      <div>
        <h1 class="recipe_group_title">Dessert</h1>
        <div class="recipe_group_wrapper">
          <Recipe
            image=""
            title="Banana Bread"
            ingredients={["2 ripe bananas", "1 egg", "1/4 cup greek yogurt", "1/2 tsp vanilla", "1 cup flour", "1/4 tsp baking powder", "1/2 tsp baking soda", "1/2 tsp cinnamon", "1/8 tsp salt"]}
            instructions={["Preheat oven to 350 degrees F and grease a loaf pan", "Mix all wet ingredients together", "Mix all dry ingredients in a separate bowl", "Pour dry mix into wet mix, and fold without overmixing", "Add extra mix-ins: blueberries, nuts, chocolate chips, etc", "Pour into loaf pan", "Bake for 40 minutes or until a knife inserted comes out clean"]}
            nutrition=""/>
          <Recipe
          image=""
          title="Grandma's Pumpkin Bread"
          ingredients={["3 cups sugar", "1 tsp nutmeg", "1 tsp cinnamon", "1 tsp salt", "1 cup oil", "4 eggs", "1 cup pumpkin", "2/3 cup water", "3 cups flour"]}
          instructions={["Preheat overn to 350 degrees F, and grease loaf pans", "Mix all intredients in a bowl until consistency is smooth", "Pour batter into loaf pans", "Bak for 35 to 45 minutes or until a knife inserted comes out clean"]}
          nutrition=""/>
          <Recipe
            image=""
            title="Banana Bars"
            ingredients={["1 cup mashed bananas (3 bananas)", "1/3 cup sugar", "3 tbsp unsalted softened butter", "2 tbsp milk", "1 egg", "1 tsp vanilla extract", "3/4 cup flour", "1/2 tsp baking soda", "1/2 tsp ground cinnamon", "1/8 tsp nutmeg", "1/4 tsp salt", "1/3 cup chocolate chips"]}
            instructions={["Place rack in center of oven, and preheat to 350 degrees F", "Line an 8x8 inch baking pan with parchment paper and cooking spray", "Mash bananas in a bowl, and stir in sugar, butter, milk, egg, and vanilla until well blended", "In a separate bowl, mix flour, baking soda, cinnamon, nutmeg, and salt", "Add dry ingredients to wet ingredients until well-blended", "Fold in chocolate chips", "Scrape batter into prepared baking dish", "Bake for 16-20 minutes or until a toothpick comes out mostly clean (a few crumbs will stick)", "To make these more chocolate-y, add 1/2 cup cocoa powder, and omit cinnamon and nutmeg"]}
            nutrition=""/>
          <Recipe
            image=""
            title="Banana Oat Cookies"
            ingredients={["1 banana", "3/4 cup oats", "2/3 tbsp cinnamon"]}
            instructions={["Preheat oven to 350 degrees F", "Mash banana in medium sized bowl", "Pour oats into bowl and mix together", "Mix in cinnamon or other toppings", "Scoop cookie balls onto a baking sheet and bake for 10 minutes"]}
            nutrition=""/>
          <Recipe
            image=""
            title="Peanut Butter Banana Oatmeal Bars"
            ingredients={["2 cups old fashioned oats", "1 cup flour", "2 tsp cinnamon", "1 tsp baking powder", "1/4 tsp salt", "1 1/2 cups milk", "3 tbsp honey", "2 tbsp peanut butter", "1/2 cup applesauce", "1 egg", "1 tsp vanilla extract", "1 medium banana (sliced)"]}
            instructions={["Place rack in center of oven and preheat to 375 degrees F", "Stir together oats, flour, cinnamon, baking powder, and salt", "In separate bowl conbine milk, applesauce, egg, honey, peanut butter, and vanilla", "Pour dry ingredients into wet ingredients and stir to combine", "Fold in the diced banana, and pour into a baking pan", "Bake for 35 minutes or until thickened and gold and a toothpick inserted comes out clean"]}
            nutrition=""/>
          <Recipe
            image=""
            title="Gummy Bears"
            ingredients={["1 packet unflavored gelatin", "1 packet sugar free jello", "1/4 cup water"]}
            instructions={["Combine ingredients in stove pot, and stir on medium high heat until a thick liquid forms", "Pour into molds and place in freezer for 10 minutes"]}
            nutrition=""/>
          <Recipe
            image=""
            title="Merengues"
            ingredients={["4 egg whites", "6 tbsp sweetener", "1/4 tsp cream of tartar", "1/2 tsp almond extract", "1/8 tsp salt"]}
            instructions={["Preheat oven to 200 degrees F", "Combine ingredients and whip on med-high speed until it forms soft peaks", "Bake for 30 minutes or until they are no longer takcy"]}
            nutrition=""/>
          <Recipe
            image=""
            title="Cinnamon Apple Cake"
            ingredients={["1 1/4 cups Almond Flour", "2 1/2 tbsp Flour", "1/2 tsp baking soda", "1/4 tsp salt", "1 tbsp cinnamon", "1/4 tsp nutmeg", "2 large eggs", "5 tbsp butter", "1/3 cup maple syrup", "2 tsp vanilla extract", "2 finely chopped Granny Smith apples"]}
            instructions={["Preheat oven to 350 degrees F", "In a medium bowl, mix together the dry ingredients", "In a large bowl mix together eggs, oil, maple syrup, and vanilla", "Add the dry mix to the wet mix just until combined", "Gently fold in the apples", "Pour into a baking dish and bake for 30 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="AnotherCinnamon Apple Cake"
            ingredients={["120g flour", "2 tsp baking powder", "2 tsp cinnamon", "1 tsp nutmeg", "Pinch of salt", "1 egg", "15g melted butter", "120g yogurt", "85ml maple syrup", "85ml milk", "1 tsp vanilla extract", "1 tsp ginger", "Sliced/Chunked apple"]}
            instructions={["Preheat oven to 350 degrees F", "Mix dry ingredients together", "In a separate bowl, mix wet ingredients", "Combine dry and wet ingredients", "Mix in apple chunks or slices", "Bake for 25 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Torta Caprese"
            ingredients={["5/8 cup granulated sugar", "140g dark chocolate", "1 stick butter", "1.5 cups almond flour", "3 tbsp cocoa powder", "4 eggs", "1/2 tsp baking powser", "thinly sliced almonds", "powdered sugar", "almond extract"]}
            instructions={["Preheat oven to 350 degrees F", "In a mixing bowl, soften butter and incorporate half the sugar", "Separate the egg whites to another mixing bowl, and add the yolks to the butter mixture", "Melt the dark chocolate and add to the butter mixture", "Optional: Add a little almond extract", "Whip the egg whites with the remaining half of the sugar until they are stiff and shiny", "In a third bowl, mix together the almond flower, baking powder, and cocoa powder", "Add the powdered ingredients to the butter mixture", "Add the egg whites to the batter and incorporate using circular motions from the bottom to the top", "Grease an 8-9 inch cake pan, and add sliced almonds to the bottom", "Pour the batter into the cake pan and bake for 40 minutes", "When the cake has cooled, flip the cake pan over to remove the cake, and leave it almond side up", "Sprinkle with powdered sugar"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Pumpkin Pie (low cal)"
            ingredients={["1 can pumpkin", "1/2 cup whole milk", "3/4 cup egg beaters", "2 tsp pumpkin spice", "1 tsp xanthan gum (for rigidity)", "1/2 tsp salt", "3/4 cup Splenda"]}
            instructions={["Preheat oven to 350 degrees F", "Greace an 8 or 9 inch aluminum pie form. Springform pans are the best for crustless custards", "Whisk dry items: Xanthan gum, Splenda, salt, and spices", "Whisk egg beaters by themselves, and then mix in pumpkin pulp and milk", "Combine wet and dry ingredients and mix well", "Pour mixture into pie dish, and bake for 20 minutes, rotate the pie dish 180 degrees in the oven, and bake for another 20 minutes or until set on edges and wobbly in middle", "Let cool for an hour at room temperature before cutting"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Protein Donuts"
            ingredients={["Donut: 45g protein powder", "Donut: 15g flour", "Donut: 5g stevia", "Donut: 5g baking powder", "Donut: 70g greek yogurt", "Donut: 70g unsweetened apple sauce", "Donut: 75g egg whites", "Frosting: 20g protein powder", "Frosting: 6g flour", "Frosting: 45g greek yogurt", "Frosting: 3g stevia", "Frosting: Splash of water"]}
            instructions={["Mix the first half of the ingredients for donut batter", "Bake in donut pans", "Mix second half of ingredients for frosting on the donuts"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Pumpkin Brownies"
            ingredients={["1 cup pumpkin puree", "4 tbsp sugar", "3 tbsp unsweetened applesauce (or melted butter)", "2 tbsp milk", "1 egg", "1 tsp vanilla extract", " 3/4 cup flour", "1/2 cup cocoa powder", "1 tsp baking soda", " 1/4 tsp salt", "1 tsp cinnamon", "6 tbsp chocolate chips"]}
            instructions={["Preheat oven to  350 degrees F, and line a baking dish with parchment paper", "Stir pumpkin, sugar, butter/applesauce, milk, egg, and vanilla until well blended", "In a separate bowl, stir together flour, baking soda, cocoa powder, salt, and cinnamon", "Add the dry ingredients to the wet ingredients", "Fold in most of the chocolate chips, saving some to sprinkle on top", "Scrapte batter into the baking pan, and sprinkle remaining chips on top", "Bake for 16 to 20 minutes or until a toothpick inserted in center comes out clean", "Cool brownies on counter and cut only once completely cooled"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Banana Brownies"
            ingredients={["1 cup mashed ripe banana (3 bananas)", "4 tbsp sugar", "3 tbsp melted butter (or unsweetened applesauce)", "2 tbsp milk", "1 egg", "1 tsp vanilla extract", "3/4 cup flour", "1/2 cup cocoa powder", "1/2 tsp baking soda", "1/4 tsp salt", "6 tbsp chocolate chips"]}
            instructions={["Preheat oven to  350 degrees F, and line a baking dish with parchment paper", "Mash banana, and stir sugar, butter/applesauce, milk, egg, and vanilla until well blended", "In a separate bowl, stir together flour, baking soda, cocoa powder, and salt", "Add the dry ingredients to the wet ingredients", "Fold in most of the chocolate chips, saving some to sprinkle on top", "Scrapte batter into the baking pan, and sprinkle remaining chips on top", "Bake for 16 to 20 minutes or until a toothpick inserted in center comes out clean", "Cool brownies on counter and cut only once completely cooled"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Pumpkin Bars"
            ingredients={["1 cup pumpkin puree", "1/3 cup sugar", "3 tbsp melted butter (or unsweetened applesauce", "2 tbsp milk", "1 egg", "1 tsp vanilla extract", "3/4 cup flour", "1 tsp baking soda", " 1/4 tsp salt", "1 tsp cinnamon", "1/8 tsp nutmeg", "6 tbsp chocolate chips"]}
            instructions={["Preheat oven to  350 degrees F, and line a baking dish with parchment paper", "Stir pumpkin, sugar, butter/applesauce, milk, egg, and vanilla until well blended", "In a separate bowl, stir together flour, baking soda, salt, and spices", "Add the dry ingredients to the wet ingredients", "Fold in most of the chocolate chips, saving some to sprinkle on top", "Scrapte batter into the baking pan, and sprinkle remaining chips on top", "Bake for 16 to 20 minutes or until a toothpick inserted in center comes out clean", "Cool bars on counter and cut only once completely cooled"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Raspberry Cheesecake"
            ingredients={["1 1/2 cups flour", "1 cup sugar", "2 tsp baking powder", "3/4 tsp salt", "3 eggs", "1 2 cups yogurt", "1/2 tsp vanilla extract", "1 cup frozen raspberries"]}
            instructions={["Preheat oven to 350 degrees F", "Line a 9 inch cake pan with parchment paper and lightly coat with non-stick spray", "Whisk flour, sugar, baking powder, and salt in large bowl", "Whis eggs, yogurt, and vanilla in a medium bowl until smooth", "Fold wet ingredients into dry ingredients until blended", "Fold in 3/4 cup raspberries", "Scrape batter into prepared pan and sprinkle remaining 1/4 cup raspberries on top", "Bake 50-60 minutes or until cake is golden brown and a toothpick inserted in center comes out clean", "Let cool at least 20 minutes before unmolding"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Gingerbread Cookies"
            ingredients={["1 cup softened butter", "2 cup dark brown sugar", "2 eggs", "1 cup molasses", " 4 tsp cinnamon", "4tsp ginger", "1 tsp black pepper", "1 tsp cloves", "1 tsp baking powder", "1 tsp baking soda", "5 cups gluten-free bread flour"]}
            instructions={["Preheat oven to 305 degrees F and prepare a cookie sheet", "Whip softened butter and brown sugar", "Mix in eggs, molasses, and spices", "Use a dough hook to mix in the flour", "Divide in to 2-3 parts, and wrap and refrigerate or roll immediately", "Roll to 1/8 inches thick and cut out", "Bake for 7-9 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Sticky Buns"
            ingredients={["Dough: 1/2 cup whole milk", "Dough: 1/4 cup sugar", "Dough: 1/4 unsalted butter (softened)", "Dough: 1 tbsp active dry yeast", "Dough: 2 large eggs", "Dough: 2 cups flour", "Dough: 1/2 tsp salt", "Dough: 3/4 tsp guar gum", "Dough: 1/2 tsp xanthan gum", "Filling: 2 tbsp unsalted butter (softened)", "Filling: 1/4 cup brown sugar", "Filling: 1 1/2 tsp cinnamon", "Glaze: 1/4 cup unsalted butter (softened)", "Glaze: 2 tbsp honey", "Glaze: 2/3 cup brown sugar", "Glaze: 1/4 cup whole milk"]}
            instructions={["Preheat oven to 350 degrees F", "Dough: Place milk, sugar, and softend butter in a small sauce pan. Cook over medium-low heat for 3 minutes. Don't allow mixture to boil.", "Dough: When milk mixture is luke warm, sprinkle the yeast over top (if mixture is too hot it will kill the yeast). Let mixture sit for 10 minutes", "Dough: Place eggs in a mixing bowl and beat for 1 minute", "Dough: In a separate bowl whisk flour, salt, guar gum, and xanthan gum", "Dough: Slowly pour the milk mixture into the bowl with the eggs and beat until combined. Pour the dry ingredients into the mixing bowl and combine. The dough should be very thick, but not form a ball", "Dough: Scrape dough onto a lightly floured surface. Knead dough and sprinkle flour on it until it forms a smooth ball", "Dough: For an 8x8 inch dish, use a roling pin to form a 12 inch long by 8 inch wide rectangle (for 11x7 roll dough into 14 by 7 inch rectangle)", "Filling: Spread softened butter over dough, leaving about 1/2 inche unbuttered on the outer edges", "Filling: Place brown sugar and cinnamon in a small dish and mix to combine. Sprinkle this mixture evenly over the buttered dough", "Filling: Starting on the long side of the dough closest to you, roll the dough slowly and evenly until you get to the end. Pres down on the seam, and press the ends of the roll inward until the roll is a nice even diameter", "Glaze: Place butter, honey, brown sugar, and milk in a saucepan and heat until the mixture is boiling. Boil for 3 minutes. Remove from heat and allow to cool slightly", "Glaze: Carefully pour the warm glaze into the parchment-lined baking dish", "Baking: Cut the dough roll into equal pieces (12 pieces for the 8x8 pan or 14 for the 11x7), and place them in the dish, leaving 1/2 inch between buns to allow for rising", "Baking: Bake rolls for 25 minutes or until golden brown on top", "Let cool for 10 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Froyo Bark"
            ingredients={["250g greek yogurt", "5g vanilla extract", "5g agave syrup", "100g frozen summer fruit/berries", "15g chocolate"]}
            instructions={["Mix yogurt, vanilla, and syrup", "Pour yogurt mixture into a container, and sprinkle berries on top", "Melt chocolate and sprinkle over the top", "Freeze, and cut into pieces"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Fudgy Oat Bars"
            ingredients={["3 cups quick oats", "2 tbsp maple syrup", "2 tbsp oil or butter", "1/2 cup unsweetened applesauce or mashed banana", "1 tsp vanilla extract", "1/2 tsp salt", "1/2 cup nut butter", "1/2 cup chocolate chips"]}
            instructions={["Melt butter or use oil, and mix with applesauce/banana, maple syrup, and vanilla", "Fold in oats and salt", "Melt chocolate and nut butter in microwave, and mix until smooth", "linke an 8x8 pan with parchment paper, and press 2/3 of the oat mixture into pan", "Spread chocolate nut mixture on top of oats", "Pour remaining oat mixture on top, pressing down gently", "Freeze until firm", "Thaw for 5 minutes before slicing"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Mousse"
            ingredients={["2 Gelatin Unflavored", "4 tsp sweetener", "130g greek yogurt", "10g cocoa powder/1tbsp lemon juice",]}
            instructions={["Bloom gelatin in 1-2 tbsp cold water", "Heat 2-3 tbsp water in a separate bowl, and whisk gelatin into it until dissolved", "Add greek yogurt, sugar, and other flavoring into a mixing bowl with the gelatin", "Whip for 2-4 minutes, getting as much air into it as you can", "Pour into container and let cool in fridge for 1-2 hours"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Kransekake"
            ingredients={["1 lb almonds, skinned and ground fine", "1 lb powedered sugar", "3 egg whites", "1 tbsp almond extract"]}
            instructions={["Preheat oven to 300 degrees F", "Mix ground almonds and powdered sugar, and grind again", "Add egg whites, and almond extract", "Knead into smooth dough that sticks together", "Roll into thin snakes, a little wider than a pencil", "Set into greaced flour forms (thin donut molds)", "Bake for 20 minutes or until golden brown" ]}
            nutrition=""/>
            <Recipe
            image=""
            title="Peanut Butter Cheesecake Popsicles"
            ingredients={["1 medium banana", "2 tbsp peanut butter", "1/2 cup greek yogurt", "2.5 sheets graham crackers"]}
            instructions={["Blend everything but the graham crackers", "crumbole the crackers into the mixture and freeze for 8 hours in popsicle molds"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Oatmeal cups"
            ingredients={["2 cups oats", "4 eggs", "2 bananas mashed", "1 apple diced", "1/2 cup greek yogurt", "2 tsp baking powder", "Pinches of cinnamon, salt, vanilla extract"]}
            instructions={["Preheat oven to 350 degrees F", "Separately mix wet and dry ingredients, folding in apple with the dry ingredients", "Combine mixes, and bake for 25 minutes until browned"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Mini Pumpkin Pies"
            ingredients={["Crust: 2 bananas mashed", "Crust: 2 cups rolled oats", "Filling: 15oz can pumpkin puree", "Filling: 1 cup greek yogurt", "Filling: 6 egg whites (or 2 eggs)", "Filling: 6 tbsp brown sugar", "Filling: 1 tsp vanilla extract", "Filling: 2 tsp ground cinnamon", "Filling: 1 tsp pumpkin pie spice", "Filling: 1/4 tsp salt"]}
            instructions={["Preheat oven to 350 degrees F and spray a muffin tin", "Press crust into muffin pan and bake for 10 minutes", "Combine filling ingredients, and pour into muffin pan", "Bake for 20 minutes, let it cool, and refrigerat until they are set"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Pumpkin Blueberry Muffins"
            ingredients={["2 cups flour", "2 tsp baking powder", "1/4 tsp salt", "1-2 tsp pumpkin pie spice", "1 egg", "2 tbsp nut butter", "1 cup pumpkin puree", "4 tbsp maple syrup", "4 tbsp sugar", "1 tsp vanilla exract", "1 cup blueberries"]}
            instructions={["Preheat oven to 375 and prepare a muffin tin", "Mix all dry ingredients in a small bowl, and thoroughly mix all wet in a large bowl", "Add blueberries to the dry bowl", "Pour all ingredients to the wet bowl and mix until combined", "Pour into muffin tins, and bake 20-30 minutes or until toothpick inserted in center comes out clean"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Pumpkin cake donuts"
            ingredients={["3 large eggs", "1 1/2 cup pumpkin puree", "1/3 cup unsweetend applesauce", "3 tbsp oil", "1/2 cup sugar", "1 1/2 tsp pumpkin pie spice", "1 1/2 tsp salt", "1 3/4 cup flour", "2 tsp baking powder"]}
            instructions={["Preheat oven to 350 degrees F", "Beat everything except flour and baking powder together, and then fold in the flour and baking powder", "Transfer to donut or muffin pans", "Bake for 15-20 minutes until centers are done", "Dust them with cinnamon sugar mix while still warm"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Cinnamon Raisin Protein Banana Bread"
            ingredients={["3 spotty bananas mashed", "1 egg", "1/2 cup greek yogurt", "1 cup flour", "3 scoops protein powder", "1 tbsp cinnamon", "1/2 tsp baking powder", "1/2 tsp baking soda", "1/4 tsp salt", "1/4 cup raisins"]}
            instructions={["Preheat oven to 350 degrees F and prepare a loaf pan", "Mix wet and dry ingredients sparately, and then fold together without overmixing", "Pour into loaf pan and bake for 40-60 minutes until a toothpick inserted in center comes out clean"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Peanut Butter Banana Bread Donuts"
            ingredients={["2 ripe bananas", "1 egg", "2 tbsp peanut butter", "1 tsp vanilla exract", "4 tbsp sugar", "3/4 cup flour", "1/4 cup powdered PB2", "1/2 tsp baking powder", "1/2 tsp baking soda", "1/4 tsp salt"]}
            instructions={["Preheat oven to 350 degrees F and grease a pan", "Blend all wet ingredients including banana and sugar in a food processor (if blended by hand, donuts will be denser)", "Fold in the flour, powdered peanut, baking powder, baking soda, and salt", "Bake for 15-20 minutes until centers are done"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Lemon Blueberry Muffins"
            ingredients={["1 cup unsweetened applesauce", "2 eggs", "1/4 cup greek yogurt", "4 tbsp sugar", "Zest of one small lemon", "Juice of one small lemon", "1 1/4 cup flour", "1/2 tsp baking powder", "1/2 tsp baking soda", "1/4 tsp salt", "1/2 cup frozen blureberries"]}
            instructions={["Preheat oven to 350 degrees F, and prepare a muffin tin", "Mix sugar and zest together", "Whisk together all wet ingredients, and separately all dry ingredients, and fold the dry into the wet", "Pour into muffin pan and bake 25-30 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Chocolate banana bread pudding"
            ingredients={["100g day-old bread cubed", "1 egg", "1 cup milk", "1 tbsp maple syrup", "1/2 tsp vanilla extract", "1/2 tsp ground cinnamon", "1/8 tsp salt", "1 ripe banana chopped", "3 tbsp chocolate chips"]}
            instructions={["Preheat oven to 350 degrees F, and prepare a loaf pan", "Whisk together all the wet ingredients", "Place the bread pieces in the wet bowl and let sit for 10 minutes", "Fold in the chopped banana, saving some of each to decorate the top of the loaf", "Pour mix into pan, decorate the top, and bake for 40 minutes until bread is golden"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Apple Crisp"
            ingredients={["2 cups peeled and sliced apple", "1/4 cup rolled oats", "2 tbsp flour", "1tbsp melted butter", "1 tbsp brown sugar", "1/4 tsp ground cinnamon", "1/8 tsp salt"]}
            instructions={["Preheat oven to 350 degrees F and prepare a loaf pan", "Combine all dry ingredients except the apple", "Pour butter into dry mixture and turn it into crumbles", "Layer the apple slices in the pan, and top with the crumble", "Bake for 40 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Chocolate Raspberry Bread Pudding"
            ingredients={["2 cups day-old chopped bread", "1 cup milk", "1 egg", "2 tbsp maple syrup or honey", "2 tbsp cocoa powder", "1/2 tsp vanilla extract", "1/8 tsp salt", "1 cup raspberries", "4 tbsp chocolate chips"]}
            instructions={["Preheat oven to 350 degrees F and prepare a loaf pan", "Heat the chocolate chips, cocoa powder, and half of the milk overmedium heat, stirring until well combined", "Transfer to a bowl and stir in the rest of the milk, syrup/honey, and vanilla", "Whisk in the egg", "Let the bread cubes soak in this mixture for 20 minutes", "Mix in the rapsberries, and pour into loaf pan", "Bake for 40 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Baked Oatmeal"
            ingredients={["2 1/2 cup rolled oats", "2 tbsp brown sugar", "1 tsp ground cinnamon", "1/2 tsp salt", "2 1/2 cup milk", "1 egg", "1 tsp vanilla extract", "Chopped fruit (pear, apple, etc) or other toppings"]}
            instructions={["Preheat oven to 350 degrees F and prepare a baking dish", "Whisk together all the dry and wet ingredients in separate bowls, and then combine", "Transfer to baking dish and bake for 40 minutes or until center is no longer wet"]}
            nutrition=""/>
            <Recipe
            image=""
            title="Cinnamon Coffee Cake"
            ingredients={["Cake: 1 egg", "Cake: 1/2 cup milk", "Cake: 1/2 cup unsweetened applesauce", "Cake: 1/4 cup sugar", "Cake: 1 tsp vanilla extract", "Cake: 2 tbsp melted butter", "Cake: 1 1/2 cup flour", "Cake: 1 1/2 tsp baking powder", "Cake: 1/4 tsp salt", "Cinnamon Layer: 1/4 cup brown sugar", "Cinnamon Layer: 1 tsp ground cinnamon", "Cinnamon Layer: 1 tbsp butter melted"]}
            instructions={["Preheat oven to 350 degrees F and prepare a baking dish", "Beat the egg and mix with all liquid ingredients", "Whisk together dry ingredients, and fold in the wet", "Prepare cinnamon layer by combining sugar and cinnamon", "Pour half of the batter into the baking dish, and sprinkle with half the cinnamon mixture", "Pour the rest of the batter in, and then sprinkle with the remaining cinnamon mixture", "Drizzle melted butter on top", "Bake for 20 minutes"]}
            nutrition=""/>
            <Recipe
            image=""
            title="S'mores Cookies"
            ingredients={["1 egg", "1/2 cup creamy nut butter", "2 tbsp honey", "1/2 tsp vanilla extract", "1 cup flour", "1/2 tsp baking soda", "1/4 tsp sea salt", "2/3 cup mini marshmallows", "2 graham cracker sheets broken into small pieces", "2 tbsp chocolate chips"]}
            instructions={["Preheat oven to 350 degrees F", "Beat egg and mix with nut butter, honey, and vanilla until it becomes liquid-like", "Whisk together flour, baking soda, and salt", "Combine with the egg mixture to form dough", "Add the graham cracker pieces, marshmallows, and chocolate chips", "Bake for 9-10 minutes"]}
            nutrition=""/>
          <Recipe
            image=""
            title=""
            ingredients={[]}
            instructions={[]}
            nutrition=""/>
        </div>
      </div>,
      domContainer
    )
  });