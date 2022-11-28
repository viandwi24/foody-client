<script lang="ts" setup>
import { useAuth } from '~~/stores/auth'

definePageMeta({
  layout: 'dashboard',
})

const auth = useAuth()

const data = ref({
  email: 'owner@example.com',
  password: 'password',
})

const login = () => {
  auth.login(data.value)
}
</script>

<template>
  <PageWrapper class="flex-1 flex">
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex justify-center items-center">
        <div class="max-w-sm w-full mx-auto">
          <Card>
            <CardContent>
              <CardTitle text="LOGIN" />
              <div class="flex flex-col space-y-4 mt-2">
                <div class="flex flex-col space-y-2">
                  <label>Email</label>
                  <FormTextInput v-model="data.email" type="email" />
                </div>
                <div class="flex flex-col space-y-2">
                  <label>Password</label>
                  <FormTextInput v-model="data.password" type="password" />
                </div>
                <div>
                  <Button
                    class="w-full"
                    type="primary"
                    text="Login"
                    @click="login"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
