<script lang="ts">
  import { C } from "../tokens";

  let form = {
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  };

  function handleSubmit() {
    const mailto = `mailto:ayra@yhan.org?subject=${encodeURIComponent(
      form.topic || "Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  }

  const inputStyle = `
    width: 100%;
    padding: 12px 15px;
    border: 1.5px solid ${C.border};
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: ${C.navy};
    background: ${C.offwhite};
    outline: none;
    font-weight: 500;
    box-sizing: border-box;
  `;
  
  const labelStyle = `
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: ${C.mid};
    margin-bottom: 6px;
  `;
</script>

<div
  style="
    background: {C.white};
    border-radius: 24px;
    padding: 44px 40px;
    box-shadow: 0 4px 36px rgba(35,44,61,.09);
    border: 1.5px solid {C.border};
  "
>
  <div
    style="
      font-family: 'Fraunces', serif;
      font-weight: 700;
      font-size: 1.35rem;
      color: {C.navy};
      margin-bottom: 5px;
    "
  >
    Send us a message
  </div>
  <div
    style="
      font-family: 'DM Sans', sans-serif;
      font-size: 0.87rem;
      color: {C.mid};
      margin-bottom: 26px;
      font-weight: 500;
    "
  >
    We'll get back to you as soon as we can.
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
    <div>
      <label style={labelStyle}>First Name</label>
      <input
        style={inputStyle}
        placeholder="Ayra"
        bind:value={form.firstName}
      />
    </div>
    <div>
      <label style={labelStyle}>Last Name</label>
      <input
        style={inputStyle}
        placeholder="Dhillon"
        bind:value={form.lastName}
      />
    </div>
  </div>

  <div style="margin-bottom: 14px;">
    <label style={labelStyle}>Email</label>
    <input
      style={inputStyle}
      type="email"
      placeholder="you@school.com"
      bind:value={form.email}
    />
  </div>

  <div style="margin-bottom: 14px;">
    <label style={labelStyle}>I'm reaching out about</label>
    <select
      style="{inputStyle} appearance: none;"
      bind:value={form.topic}
    >
      <option value="">Select a topic...</option>
      {#each ["Starting a YHAN Chapter", "Ambassador Application", "School / Organization Partnership", "General Inquiry", "Media & Press"] as o}
        <option value={o}>{o}</option>
      {/each}
    </select>
  </div>

  <div style="margin-bottom: 14px;">
    <label style={labelStyle}>Message</label>
    <textarea
      style="{inputStyle} resize: vertical;"
      rows="4"
      placeholder="Tell us about yourself and what you're hoping to do..."
      bind:value={form.message}
    ></textarea>
  </div>

  <button
    on:click={handleSubmit}
    style="
      width: 100%;
      padding: 14px;
      background: {C.orange};
      color: #fff;
      border: none;
      border-radius: 10px;
      font-family: 'DM Sans', sans-serif;
      font-weight: 800;
      font-size: 0.93rem;
      cursor: pointer;
      margin-top: 6px;
    "
  >
    Send Message →
  </button>
</div>
