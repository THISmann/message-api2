import { mount } from "@vue/test-utils";
import HomePage from "../views/HomePage.vue";
import { expect } from "vitest";

test("mount component",  async() => {
    expect(HomePage).toBeTruthy();

    // const wrapper = mount(HomePage,{
        
    // });

    // expect(wrapper.text()).toContain("");
});