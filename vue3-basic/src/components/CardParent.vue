<template>
    <div>
        <Card>
            <template #header>
                <p>
                    Lorem ipsum dolor sit amet consectetur，adipisicing elit.Totam
                    deleniti earum ratione ut alias excepturi nisi non est saepe
                    consectetur,nesciunt deserunt sequi animi veritatis voluptates
                    numquam maxime consequatur ad !
                </p>
            </template>

            <p>
                这是中间的主题内容这是中间的主题内容这是中间的主题内容这是中间的主题内容
            </p>

            <template #footer>
                <p>
                    Lorem ipsum dolor sit amet consectetur，adipisicing elit.Totam
                    deleniti earum ratione ut alias excepturi nisi non est saepe
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>