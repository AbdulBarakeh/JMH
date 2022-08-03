import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SendFile from "../SendFile.vue";

describe("SendFile", () => {
  it("renders properly", () => {
    const wrapper = mount(SendFile, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
